## Example Lambda triggered by custom event

Javascript source is in [process-review.js](resources/lambda/process-review.js) and dependencies are in [package.json](resources/lambda/package.json).

Deploy the lambda using the [Kubeless](https://kubeless.io/docs/quick-start/) command:
`kubeless function deploy process-review --runtime nodejs8 --handler handler.main --from-file process-review.js --dependencies package.json --env BASESITE=electronics,SERVICE_URL=https://${COMMERCE_API_URL}/odata2webservices/InboundCustomerReview/CustomerReviews,SERVICE_UID=admin,SERVICE_PW=nimda --label=app=process-review --namespace $NAMESPACE --cpu 0.1 --memory 128Mi`

Deploy the event trigger for the function: (first update the namespace, endpoint and sourceid values)
`kubectl create -f process-review-trigger.yaml`

Alternatively, you can deploy the lambda and trigger in one go with this command: `kubectl apply -f process-review.yaml`.  
**Note**  This is for example purposes only. [process-review.yaml](process-review.yaml) has the Javascript source embedded in it so it is not as maintainable. 

### Storing service connections in a secret
Create the secret like so:
`kubectl create secret generic ecc-odata-review-service -n ${NAMESPACE} --type=string --from-literal=SERVICE_URL=https://${COMMERCE_API_URL}/odata2webservices/InboundCustomerReview --from-literal=SERVICE_UID=admin --from-literal=SERVICE_PW=nimda`

On the `kubeless` command above, omit the `--env` relevant values and add an option: `--secrets ecc-odata-review-service`
Kubeless will mount the secret as files and can be accessed thus:
```javascript
        var surl = fs.readFileSync('/ecc-odata-review-service/SERVICE_URL');
        var suid = fs.readFileSync('/ecc-odata-review-service/SERVICE_UID');
        var spwd = fs.readFileSync('/ecc-odata-review-service/SERVICE_PW');
```

Another option is to inject the secret as container environment variables.  This is not demonstrated here but could be defined on the function via yaml as discussed in the [Kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets)
```yaml
...    
env:
         - name: SERVICE_URL
           valueFrom:
             secretKeyRef:
               name: ecc-odata-review-service
               key: SERVICE_URL
         - name: SERVICE_UID
           valueFrom:
             secretKeyRef:
               name: ecc-odata-review-service
               key: SERVICE_UID
        - name: SERVICE_PWD
           valueFrom:
             secretKeyRef:
               name: ecc-odata-review-service
               key: SERVICE_PWD
...
```