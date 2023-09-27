from django.contrib import admin
from .models import StudentExtra
from .models import Book
from .models import IssuedBook
# Register your models here.

admin.site.register(StudentExtra)
admin.site.register(Book)
admin.site.register(IssuedBook)
