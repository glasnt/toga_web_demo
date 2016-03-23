
var toga = {
    handler: function(ref, widget) {
        if (ref === "None") {
            return function() {
                console.log("No handler defined for " + ref + " on " + widget);
            };
        } else {
            var context;
            var name;

            if (ref[0] === "(") {
                var parts = ref.slice(1,-1).split(',');
                context = document.getElementById(parts[0]).toga;
                name = parts[1];
                return function(evt) {
                    toga.vm.run_method(name, [context, widget]);
                };
            } else {
                return function(evt) {
                    toga.vm.run_method(name, [widget]);
                };
            }
        }
    }
};

$(window).load(function() {
    console.log('Create VM...');
    toga.vm = new batavia.VirtualMachine();
    console.log('Instantiate Toga objects...');
    $("[data-toga-class]").each(function(index) {
        console.log("Create " + $(this).data('toga-class') + ':' + this.id);
        toga.vm.run_method('bootstrap', [this, $(this).data('toga-class')]);
    });

    $("[data-toga-class]").each(function(index) {
        console.log("Set ports for " + $(this).data('toga-class') + ":" + this.toga.widget_id);
        var ports = this.dataset.togaPorts.split(',');
        for (var port = 0; port < ports.length; port++) {
            var parts = ports[port].split('=');
            if (parts.length == 2 && parts[0] !== 'parent') {
                this.toga.ports[parts[0]] = parts[1];
                this.toga[parts[0]] = document.getElementById(parts[1]).toga;
            }
        }
    });
    console.log('Toga is ready.');
});