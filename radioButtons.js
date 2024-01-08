class RadioButton {
    constructor($button) {
        this.$button = $button
        this.$parent = $($button).closest('.radioButtonGroup')
        this.$input = $(this.$button).find('input')

        this.init()
    }
    init() {
        $(this.$button).on('click', this.handler.bind(this))
    }
    handler() {
        this.deactivateAll()
        this.activate(this.$button)
    }
    activate($button) {

        $($button).addClass('active')
        $(this.$input).prop('checked', true);
    }
    deactivate($button) {
        $($button).removeClass('active')
        $(this.$input).prop('checked', false);
    }
    deactivateAll() {
        var inst = this
        $(this.$parent).find('.radioButton').each(function (index, $elem) {
            inst.deactivate($elem)
        })
    }
}