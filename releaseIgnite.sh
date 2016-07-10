#! /bin/bash
if [[ -z $1 ]]; then
  echo 'Must pass release version as parameter'
  exit 1
fi

echo "You are about to cut a release for version " $1
while true; do
    read -p "Do you wish to release? " yn
    case $yn in
        [Yy]* ) echo "Buckle up!"; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done


echo "Got here"