CLS
@
@echo 

echo 
echo 

SET cf_api=https://api.ng.bluemix.net
SET cf_region=us-south
SET cf_org=sebaeze@gmail.com
SET cf_space=dev
SET cf_app=andreoletti-webpage

SET cf_email=sebaeze@gmail.com
SET cf_password=ZXC@asdqwe123

@ECHO OFF
REM SET /P cf_email=Ingresar email:  
REM IF "%cf_email%"=="" GOTO Error

REM SET /P cf_password=Ingresar password para user: "%cf_email%" 
REM IF "%cf_password%"=="" GOTO Error


echo "ibmcloud api %cf_api%"
ibmcloud api %cf_api%

echo "ibmcloud cf login -u %cf_email%  -p ******** -o %cf_org%  --no-iam"
ibmcloud login -u %cf_email%  -p %cf_password% --no-iam

echo "ibmcloud config --check-version=false"
ibmcloud config --check-version=false


echo "ibmcloud target   -r %cf_region% -s %cf_space%"
ibmcloud target  -o %cf_org% -r %cf_region% -s %cf_space%

echo "ibmcloud config --check-version=false"
ibmcloud config --check-version=false

echo "ibmcloud cf logs %cf_app% --recent"
ibmcloud cf logs  %cf_app%  --recent

echo
pause