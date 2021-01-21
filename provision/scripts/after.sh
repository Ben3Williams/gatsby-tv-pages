#!/bin/bash
source $(dirname $0)/config.cfg

set -e

vhost()
{
  sudo chmod -R 755 /data/apache2/$domain_name
  sudo a2ensite $domain_name.conf
}

vhost
