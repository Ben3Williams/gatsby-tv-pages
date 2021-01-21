#!/bin/bash
set -e

source $(dirname $0)/config.cfg

#codedeploy_url=`sed -n '1p' ./codebuild.env`
#codedeploy_branch=`sed -n '2p' ./codebuild.env`
apache_path="/data/apache2"
documentroot="$apache_path/$domain_name/public_html"
oldreleases="$apache_path/$domain_name/oldreleases"
vhost_conf="/etc/apache2/sites-available/$domain_name.conf"

version()
{
if [ -d $documentroot ]
  then
    sudo rm -rf $documentroot
    sudo mkdir -p $documentroot
  else
    sudo mkdir -p $documentroot
fi
}

vhost()
{

if [ -f $vhost_conf ]
  then
    sudo a2dissite $domain_name.conf
    sudo rm -f $vhost_conf || true
  else
    sudo rm -f $vhost_conf || true
fi
}

version
vhost
