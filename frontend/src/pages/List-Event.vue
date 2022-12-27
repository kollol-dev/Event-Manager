<template>
    <div class="album py-5 bg-light">
        <router-view />
    </div>
</template>
  
<script>
// import Table from "../components/Table.vue"
export default {
    components: {
        // Table
    },

    data() {
        return {
            events: [],
            tableLoading: true,
            page: 1,
            pageSize: 5,
            showModal: false,
            pageSizeOptions: [5, 10, 15, 20, 50, 100]
        }
    },

    async mounted() {
        this.tableLoading = true
        const res = await this.callApi('get', '/events')

        if (res.status === 200) {
            this.events = res.data.data
            this.page = res.data.page
            this.pageSize = res.data.pageSize
        }


        this.tableLoading = false
    }
}

</script>
  