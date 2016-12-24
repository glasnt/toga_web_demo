
topic/make-it-go changes
-----------

There are a few manual changes to the a100fa6 version of upstream that are required:

 - Python 3.5.2 virtual env required
 - pip install -r requirements.txt
 - pip uninstall rubicon-objc toga-cocoa toga-core
 - python manage.py migrate
 - python manage.py runserver


Toga-web-demo
=============


A demonstrator of the Toga UI toolkit, deployed to the web as a platform.

Quickstart
----------

If you want to see what a Toga application looks like, the key file is
`example.py`_ - this is the definition of the Toga application.

.. _example.py: https://github.com/freakboy3742/toga_web_demo/blob/master/example.py

If you want to see it running, the code is `deployed on PythonAnyware`_.

.. _deployed on PythonAnyware: http://freakboy3742.pythonanywhere.com/

Community
---------

Toga is part of the `BeeWare suite`_. You can talk to the community through:

* `@pybeeware on Twitter`_

* The `BeeWare Users Mailing list`_, for questions about how to use the BeeWare suite.

* The `BeeWare Developers Mailing list`_, for discussing the development of new features in the BeeWare suite, and ideas for new tools for the suite.

Contributing
------------

If you experience problems with Toga, `log them on GitHub`_. If you
want to contribute code, please `fork the code`_ and `submit a pull request`_.

.. _BeeWare suite: http://pybee.org
.. _Read The Docs: http://toga.readthedocs.org
.. _toga-cocoa: http://github.com/pybee/toga-cocoa
.. _toga-gtk: http://github.com/pybee/toga-gtk
.. _toga-win32: http://github.com/pybee/toga-win32
.. _toga-iOS: http://github.com/pybee/toga-iOS
.. _toga-android: http://github.com/pybee/toga-android
.. _@pybeeware on Twitter: https://twitter.com/pybeeware
.. _BeeWare Users Mailing list: https://groups.google.com/forum/#!forum/beeware-users
.. _BeeWare Developers Mailing list: https://groups.google.com/forum/#!forum/beeware-developers
.. _log them on Github: https://github.com/pybee/toga/issues
.. _fork the code: https://github.com/pybee/toga
.. _submit a pull request: https://github.com/pybee/toga/pulls
