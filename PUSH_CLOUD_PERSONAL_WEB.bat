CLS
@
@echo 

echo 
echo *** iniciando proceso de push de proyecto ***
echo

@ECHO OFF
SET cf_api=https://api.ng.bluemix.net
SET cf_region=us-south
SET cf_org=sebaeze@gmail.com
SET cf_space=dev

SET cf_email=
SET cf_password=

@ECHO OFF
SET /P cf_email=Ingresar email:  
IF "%cf_email%"=="" GOTO Error

SET /P cf_password=Ingresar password para user: "%cf_email%" 
IF "%cf_password%"=="" GOTO Error


echo "ibmcloud api %cf_api%"
ibmcloud api %cf_api%

echo "ibmcloud cf login -u %cf_email%  -p ******** -o %cf_org%  --no-iam"
ibmcloud login -u %cf_email%  -p %cf_password% --no-iam

echo "ibmcloud config --check-version=false"
ibmcloud config --check-version=false

echo "ibmcloud target   -o %cf_org% -r %cf_region% -s %cf_space%"
ibmcloud target  -o %cf_org% -r %cf_region% -s %cf_space%

echo "ibmcloud cf push andreoletti-webpage -f manifest.yml -t 180"
ibmcloud cf push andreoletti-webpage   -f manifest.yml -t 180

GOTO End

@ECHO
@ECHO

:Error
ECHO *** ERROR: Falta ingresar datos para login ***
:End

pause
