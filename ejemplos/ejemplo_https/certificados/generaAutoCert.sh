
// https://wiki.celogeek.com/pages/Tips:Linux:OpenSSL:Create_A_Self_Signed_Certificate

openssl genrsa 2048 > host.key
openssl req -new -x509 -nodes -sha1 -days 3650 -key host.key > host.cert
openssl x509 -noout -fingerprint -text < host.cert > host.info
cat host.cert host.key > host.pem
chmod 400 host.key host.pem