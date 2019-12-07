/usr/bin/expect <<EOD
spawn npm adduser --registry http://localhost:4873
expect {
  "Username:" {send "nico\r"; exp_continue}
  "Password:" {send "nico\r"; exp_continue}
  "Email: (this IS public)" {send "nico@nico.com\r"; exp_continue}
}
