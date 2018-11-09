from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

import payment.views

# Examples:
# url(r'^$', 'payment.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', payment.views.index, name='index'),
    url(r'^db', payment.views.db, name='db'),
    url(r'^payment', payment.views.payment, name='payment'),
    url(r'^admin/', admin.site.urls),
]
