#!/bin/bash
set -e
source $(dirname $0)/config.cfg

validate(){

  curl http://$domain_name

}

validate
