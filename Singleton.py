from datetime import datetime as dt
from time import sleep

class Date():
    __date = None
    def __init__(self):
        Date.__date = dt.utcnow()

    @staticmethod
    def get_time():
        return Date.__date

object_1 = Date()
print(Date.get_time())
sleep(5)
object_2 = object_1.get_time()
print(object_2)