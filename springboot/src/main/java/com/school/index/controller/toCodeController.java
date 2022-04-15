package com.school.index.controller;

import java.awt.image.BufferedImage;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;

import javax.imageio.ImageIO;

import java.util.Hashtable;

import com.google.zxing.common.BitMatrix;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.school.index.pojo.Res;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 二维码的生成需要借助MatrixToImageWriter类，该类是由Google提供的，可以将该类直接拷贝到源码中使用
 */
@Controller
@RequestMapping("code")
public class toCodeController {
    private static final int WHITE = 0xFFFFFFFF;
    private static final int RED = 0xDC143C;
    private static final int GREEN = 0x008001;

    private toCodeController() {
    }

    public static BufferedImage toBufferedImage(BitMatrix matrix,Integer isHealth) {
        int width = matrix.getWidth();
        int height = matrix.getHeight();
        int color;
        if (isHealth == 0){
            color = RED;
        }else{
            color = GREEN;
        }
        BufferedImage image = new BufferedImage(width, height,
                BufferedImage.TYPE_INT_RGB);
        for (int x = 0; x < width; x++) {
            for (int y = 0; y < height; y++) {
                image.setRGB(x, y, matrix.get(x, y) ? color : WHITE);
            }
        }
        return image;
    }

    public static void writeToFile(BitMatrix matrix, String format, File file,Integer isHealth)
            throws IOException {
        BufferedImage image = toBufferedImage(matrix,isHealth);
        if (!ImageIO.write(image, format, file)) {
            throw new IOException("Could not write an image of format "
                    + format + " to " + file);
        }
    }

    public static void writeToStream(BitMatrix matrix, String format,
                                     OutputStream stream,Integer isHealth) throws IOException {
        BufferedImage image = toBufferedImage(matrix,isHealth);
        if (!ImageIO.write(image, format, stream)) {
            throw new IOException("Could not write an image of format " + format);
        }
    }

    @RequestMapping("/showCode")
    @ResponseBody
    public void showCode(String stuId,String name, Integer isHealth) throws Exception {
        String health;
        if (isHealth == 1) {
            health = "健康";
        }else{
            health = "不健康";
        }
        String text = stuId+" "+name+" "+health; // 二维码内容
        int width = 400; // 二维码图片宽度
        int height = 400; // 二维码图片高度
        String format = "jpg";// 二维码的图片格式

        Hashtable<EncodeHintType, String> hints = new Hashtable<EncodeHintType, String>();
        hints.put(EncodeHintType.CHARACTER_SET, "utf-8"); // 内容所使用字符集编码

        BitMatrix bitMatrix = new MultiFormatWriter().encode(text,
                BarcodeFormat.QR_CODE, width, height, hints);
        // 生成二维码
        File outputFile = new File("D:/毕设/school/wx/img" + File.separator + "code.jpg");
        toCodeController.writeToFile(bitMatrix, format, outputFile,isHealth);
    }
}
