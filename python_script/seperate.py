from PIL import Image
import os

res_x = 512
res_y = 512
# We have very big pictures
Image.MAX_IMAGE_PIXELS = 1000000000

test = 'FID9.34_IS202.6_TRUNC1.240'
def decompose_image(path, extraction_path, run_num, img_num):
    folder_name = path.split('/')[0]
    im = Image.open(path)
    im_size = im.size
    print(im_size)
    
    result_box = (0,0,512,512)

    row = 0
    col = 0
    for y in range(0, im_size[1] - res_y, res_y + 1):
        col = 0
        row += 1
        for x in range(0, im_size[0], res_x + 1):
            result_box = (x, y, x + 512, y + 512)
            col += 1
            result_image_name = str(run_num) + '_' + str(img_num) + '_' + str(row) + '_' + str(col) + '.png'
            result_image_path = os.path.join(extraction_path, result_image_name)
            result_image = Image.new("RGB", (res_x,res_y), "white")
            result_image.paste(im.crop(result_box))
            result_image.save(result_image_path)


    #for x in range(0, im_size[0], res_x):
    #    for y in range(0, im_size[1], res_y):
    
            

def seperate_results(result_folder, run_num):
    # only 19
    for i in range(0, 20):
        print("----Starting-------")
        print(i)
        
        extraction_path = os.path.join(result_folder, str(i))
        os.mkdir(extraction_path)

        img_path = os.path.join(result_folder, str(i) + '.jpg')

        decompose_image(img_path, extraction_path, run_num, i)
        print("----Ending-------")




#seperate_sample(test)
seperate_results(test, 1)
