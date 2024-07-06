class F8 {
    static components = {};

    static component(name, options) {
        this.components[name] = options;
        customElements.define(
            name,
            class extends HTMLElement {
                constructor() {
                    super();
                    this.attachShadow({ mode: 'open' });
                    this.state = options.data ? options.data() : {};
                    this.render();
                }

                render() {
                    const template = document.createElement('template');
                    template.innerHTML = options.template.replace(
                        /\{\{(.*?)\}\}/g,
                        (_, key) => {
                            return this.state[key.trim()];
                        }
                    );
                    this.shadowRoot.innerHTML = '';
                    this.shadowRoot.appendChild(
                        template.content.cloneNode(true)
                    );

                    this.addEventListeners();
                }

                addEventListeners() {
                    const buttons = this.shadowRoot.querySelectorAll('button');
                    buttons.forEach((button) => {
                        if (button.hasAttribute('v-on:click')) {
                            button.addEventListener('click', () => {
                                const method =
                                    button.getAttribute('v-on:click');
                                this[method]();
                                this.render();
                            });
                        }
                        if (button.hasAttribute('v-on:dblclick')) {
                            button.addEventListener('dblclick', () => {
                                const method =
                                    button.getAttribute('v-on:dblclick');
                                this[method]();
                                this.render();
                            });
                        }
                    });
                }

                ['count++']() {
                    this.state.count++;
                }

                ['count--']() {
                    this.state.count--;
                }

                ['title="Hello F8"']() {
                    this.state.title = 'Hello F8';
                }
            }
        );
    }
}
