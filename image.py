from PIL import Image

image = Image.open("images/pic1.png")
print(f"Original size : {image.size}") # 5464x3640

sunset_resized = image.resize((200, 200)) 
sunset_resized.save('images/pic_1.png')