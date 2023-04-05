# c23-bad-group4-tw
Ai Camera python link:
https://github.com/TimDylanHo/c23-bad-group4-tw-AI

<<<<<<< HEAD

- 1 左上角MC2
- 2 右上角揀server地區
- 3 建立 instance (Launch instance)
- 4 Name and tags 入返個名
- 5 揀ubuntu os
- 6 key pair位 create key pair(入返名)-> create key pair
- 7 建立完會download咗落嚟（.pem)唔可唔見
- 8 Firewall (security group) -> create security group -> Allow SSH traffic from & HTTPS (443) & HTTP (80)
- 9 configure storage set to 30GB
- 10 Termination protection -> Enable
- 11 右下角Launch instance
- 
- // socket io for front end alert and 框閃同有聲-->禁入去trigger is_solved
- html camera.html
- routes sign out route
- check login hide the type box
- check login show hi name
- notification: change the color border-notice
- detection: turn on / off notice

socket io 要係html加socket 嘅script 同index.js 加 ``const socket = io.connect()``

socket.emit (server to specific client side)

io.emit (broadcast to all client)

/hi route save 入database   no inside cam => is_solve = false

if is_solve = false trigger 閃邊

click div to  change to is_solve = true and no 閃
