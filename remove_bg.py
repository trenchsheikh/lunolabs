from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Get the background color from the top-left pixel
    bg_color = datas[0]
    
    # Tolerance for background removal
    tolerance = 30

    for item in datas:
        # Check if current pixel is close to background color
        is_bg = True
        for i in range(3): # RGB
            if abs(item[i] - bg_color[i]) > tolerance:
                is_bg = False
                break
        
        if is_bg:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background("public/Luno.png", "public/logo-transparent.png")
