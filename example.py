import toga


class Example(toga.App):
    def startup(self):
        self.list = toga.List(widget_id='todo', source='todo-list')
        self.input = toga.TextInput(widget_id='data', placeholder="new todo", flex=1, margin=5)

        container = toga.Container(
            self.list,
            toga.Container(
                self.input,
                toga.Button('Add', on_press=self.add_entry),
                flex_direction='row'
            ),
            flex_direction='column'
        )
        self.main_window.title = "Toga demo"
        self.main_window.content = container

    def add_entry(self, widget):
        toga.post(self.list.create_url, {
            'description': self.input.value(),
            'completed': False,
        })

        self.list.add(self.input.value())
        self.input.clear()
