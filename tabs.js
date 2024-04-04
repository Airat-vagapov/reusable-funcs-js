class Tab {
    constructor($tab) {
        this.$tab = $tab
        this.tabName = $(this.$tab).data('tab')
        this.$tabBlock = $(this.$tab).closest('.tabsBlock')
        this.$allContentBlocks = this.$tabBlock.find('.tabContent')
        this.$tabContentBlock = this.$tabBlock.find(`.tabContent[data-tab-content=${this.tabName}]`)

        this.change = ('tabChange')
        this.init()
    }
    init() {
        $(this.$tab).on('click', this.activateTab.bind(this))
    }

    activateTab() {
        this.deactivateAll(this)
        $(this.$tab).addClass('active')
        this.showTabContent(this)

        $(document).trigger(this.change);
    }
    deactivateAll() {
        $(this.$tabBlock).find('.tab').each(function (index, $tab) {
            $($tab).removeClass('active')
        })
    }

    showTabContent() {
        this.$allContentBlocks.each(function (ind, $el) { $($el).removeClass('active') })
        this.$tabContentBlock.addClass('active')
    }
}