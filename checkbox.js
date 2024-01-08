
class Checkbox {
    constructor($checkbox) {
        this.$checkbox = $checkbox
        this.$input = $(this.$checkbox).find('input')

        this.init()
    }
    init() {
        $(this.$checkbox).off('click').on('click', this.handler.bind(this))
        $(this.$input).off('click').on('click', function (e) {
            e.stopPropagation();
        })
    }
    handler() {
        $(this.$checkbox).hasClass('active') ? this.deactivate() : this.activate()
    }
    activate() {
        $(this.$checkbox).addClass('active')
        $(this.$input).prop('checked', true);
    }
    deactivate() {
        $(this.$checkbox).removeClass('active')
        $(this.$input).prop('checked', false);
    }
}
