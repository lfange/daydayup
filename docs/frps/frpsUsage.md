关于 frps 内网穿透的使用

### linux 下载 frps

```
wget https://github.com/fatedier/frp/releases/download/v0.39.1/frp_0.39.1_linux_amd64.tar.gz
```

### 解压

```
tar -zxvf frp_0.39.1_linux_amd64.tar.gz
```

### 服务端 frps.ini

```
[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = 7000
# 授权码，请改成更复杂的
token = 52010  # 这个token之后在客户端会用到

# frp管理后台端口，请按自己需求更改
dashboard_port = 7500
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = admin
enable_prometheus = true

# frp日志配置
log_file = /var/log/frps.log
log_level = info
log_max_days = 3

```

#### 服务端启动

```
./frps -c ./frps.ini

nohup ./frps -c ./frps.ini &  // linux 后台启动服务
```

### 客户端 frpc.ini

```
[common]
server_addr = 175.178.119.134
server_port = 7000
token=52010

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 7001

```

#### 客户端启动

```
./frpc -c ./frpc.ini
```
