class F8 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static component(name, { data, template }) {
        const templateEl = document.createElement('template');
        templateEl.innerHTML = template;
        const templateNode = templateEl.content.cloneNode(true);

        class Component extends F8 {
            constructor() {
                super();
                this.state = data ? data() : {};

                // this.template = template;
                this.render();
            }

            render() {
                document.body.appendChild(templateNode);
                // templateEl.innerHTML = this.template
                //     .replace(/{{\s*title\s*}}/g, this.state.title)
                //     .replace(/{{\s*count\s*}}/g, this.state.count);
                // this.shadowRoot.innerHTML = this.template
                //     .replace(/{{\s*title\s*}}/g, this.state.title)
                //     .replace(/{{\s*count\s*}}/g, this.state.count);
                // this.shadowRoot
                //     .querySelector('button:nth-child(3)')
                //     .addEventListener('click', () => {
                //         this.state.count--;
                //         this.update();
                //     });
                // this.shadowRoot
                //     .querySelector('button:nth-child(4)')
                //     .addEventListener('click', () => {
                //         this.state.count++;
                //         this.update();
                //     });
            }

            update() {
                this.shadowRoot.querySelector('h2').textContent =
                    this.state.count;
            }
        }

        customElements.define(name, Component);
    }
}
