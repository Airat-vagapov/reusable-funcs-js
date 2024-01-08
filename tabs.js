class Tab {
    constructor($tab) {
        this.$tab = $tab
        this.tabName = $(this.$tab).data('tab')
        this.isFetchContent = $(this.$tab).data('tab-fetch') || false
        // this.$tabContent = $(`[data-tab-content=${this.tabName}]`) || null
        this.fetchUrl = `/local/include/components/catalog_${this.tabName}.php`;
        this.$tabBlock = $(this.$tab).closest('.tabBlock')
        this.tabBlockName = $(this.$tabBlock).data('tab-group')
        this.$tabContentBlock = $(`.tabContent[data-tab-content=${this.tabBlockName}]`)

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

        // if ($('[data-group-by-plan]').length) { $('[data-group-by-plan]').find('.toggle').removeClass('active') }
    }
    deactivateAll() {
        $(this.$tabBlock).find('.tab').each(function (index, $tab) {
            $($tab).removeClass('active')
        })
    }

    showTabContent() {
        var tabName = this.tabName

        if (this.isFetchContent) {
            this.fetchTabData(this)
            return true
        }

        $(this.$tabContentBlock).each(function (index, $elem) { $($elem).removeClass('active') })

        $(this.$tabContentBlock).each(function (index, $tabContent) {
            if ($($tabContent).data('tab-content-name') === tabName) {
                $($tabContent).addClass('active')

                if ($($tabContent).find(`.tab[data-tab=${tabName}]`)) {
                    $($tabContent).find(`.tab[data-tab=${tabName}]`).addClass('active')
                }
            }
        })

    }

    fetchTabData() {
        var inst = this
        var tabName = this.tabName
        $.post(this.fetchUrl, tabName)
            .then(function (html) {
                var $html = '<div>' + html + '</div>'
                $(inst.$tabContentBlock).html($($html).find('.catalogList'))
                $(inst.$tabContentBlock).find('[data-tab-content]').attr('data-tab-content', tabName)
            })
    }
}