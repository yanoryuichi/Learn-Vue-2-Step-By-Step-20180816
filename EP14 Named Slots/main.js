Vue.component('modal', {
    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="header"></slot>
        </p>
        <button class="delete" aria-label="close"></button>
        </header>

        <section class="modal-card-body">
            <slot></slot>
            <slot name="test1">
                <p>Default mesg.</p>
            </slot>
        </section>

        <footer class="modal-card-foot">
            <slot name="footer"></slot>
        </footer>
    </div>
    </div>
    `,
    methods: { }
})

new Vue({
    el: '#root',
    data: { },
});