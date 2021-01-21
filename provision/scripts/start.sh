#!/bin/bash

set -e
source $(dirname $0)/config.cfg

apache_start()
{
  sudo service apache2 restart
}

apache_start

