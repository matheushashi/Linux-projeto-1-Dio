#!/bin/bash

echo "Diretorios"

mkdir /publico
mkdir /adm
mkdir /ven
mkdir /sec

echo "Grupo de usuarios"

gruopadd GRP_ADM
gruopadd GRP_VEN
gruopadd GRP_SEC

echo "usuarios"

user add carlos -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM
user add maria -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM
user add joao -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_ADM

user add debora -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN
user add sebastiana -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN 
user add roberto -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_VEN

user add josefina -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC
user add amanda -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC
user add rogerio -m -s /bin/bash -p $(openssl passwd -crypt Senha123) -G GRP_SEC

echo "especificando permissoes dos diretorios"

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec 

chmod 770 /adm     
chmod 770 /ven
chmod 770 /sec
chmod 777 /publico

echo "FIM..."
