#!/bin/bash
sed -i "s/.consumerdigitaldev.com/-int.consumerdigitaldev.com/g" $(dirname $0)/config.cfg
source $(dirname $0)/config.cfg

cp $(dirname $0)/appspec_template.yml $(dirname $0)/appspec.yml
sed -i "s/domain_name/$domain_name/g" $(dirname $0)/appspec.yml
mkdir -p $(dirname $0)/apache2/
rm -f $(dirname $0)/apache2/*.conf
cp $(dirname $0)/vhosts.conf $(dirname $0)/apache2/$domain_name.conf
sed -i "s/domain_name/$domain_name/g" $(dirname $0)/apache2/$domain_name.conf
cp $(dirname $0)/config.cfg $(dirname $0)/scripts/config.cfg
#target_group_list=`echo $domain_name | awk  -F"." '{print $1}'`
target_group_list="bau-projects"

sed -i "s/target_group_list/$target_group_list/g" $(dirname $0)/scripts/common_functions.sh

echo "#### Generated Apache Vhosts and CodeDeploy Configs ####"
