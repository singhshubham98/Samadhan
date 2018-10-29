import json
from django.http import HttpResponse, HttpResponseNotAllowed
from django.db import IntegrityError
from django.shortcuts import render, redirect
from .models import ChatRoom, ChatMessage
