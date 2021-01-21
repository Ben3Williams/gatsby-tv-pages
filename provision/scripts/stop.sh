#!/bin/bash
set -e
source $(dirname $0)/config.cfg

apache_stop()
{
  sudo service apache2 stop
}

apache_stop

