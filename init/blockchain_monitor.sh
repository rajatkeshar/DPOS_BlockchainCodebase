#!/bin/bash
readonly PROG_DIR=$(readlink -m $(dirname $0))
blockchain=$PROG_DIR/../blockchain_manager.bash
log=$PROG_DIR/../logs/blockchain_monitor.log

function auto_restart(){
	status=`$blockchain status`
	if [ "$status" == "Blockchain server is not running" ];then
		$blockchain restart
		echo "`date +%F' '%H:%M:%S`[error]	Blockchain server is not running and restarted" >> $log
	else
		echo "`date +%F' '%H:%M:%S`[info]	Blockchain server is running" >> $log
	fi
	/etc/init.d/ntp stop
	sleep 2
	ntpdate pool.ntp.org >> $log
	/etc/init.d/ntp start
}

auto_restart
