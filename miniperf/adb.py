import os
import subprocess
import whichcraft
from u3driver import AltrunUnityDriver

def adb_path():
    """ get adb path
    Return:
        adb path
    """
    return whichcraft.which("adb")

class Device:
    def __init__(self,serial_num):
        self.serial_num = serial_num
        self.screenshot_path = os.path.join('C:\image', 'screenshot_pic')
        self.device = AltrunUnityDriver(serial_num,'','10.11.249.48')
        pass

    # def screenshot(self):
    #     adb = adb_path()
    #     cmdline = adb + ' -s ' + self.serial_num + ' shell screencap -p'
    #     # windows
    #     # return subprocess.Popen(cmdline, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()
    #     # linux
    #     return subprocess.Popen(cmdline, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout.read()

    def screenshot(self, filename=None, format='pillow'):
        """ screenshot, Image format is JPEG
        Args:
            filename (str): saved filename
            format (str): used when filename is empty. one of "pillow" or "opencv"
        Examples:
            screenshot("saved.jpg")
            screenshot().save("saved.png")
            cv2.imwrite('saved.jpg', screenshot(format='opencv'))
        Return:
            screenshot result
        """
        try:
            # self.logger.info('--screenshot-- filename=' + filename)
            return self.device.screenshot(filename, format)
        except Exception as e:
            # self.logger.error('--screenshot-- failed!!!!! Exception=' + str(e), exc_info=True)
            return None
