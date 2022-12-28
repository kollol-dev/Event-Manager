<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-white">
                    <h5><strong>Events</strong></h5>
                    <span class="text-muted">List of events! - </span>
                    <a style="color: #4F47E5; font-weight: 600; cursor: pointer;" @click.prevent="showModal = !showModal">
                        Create
                    </a>

                </div>
                <div class="card-body">
                    <Table :rows="events" :loading="tableLoading" :page="page" :pageSize="pageSize"></Table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Table from "../components/Table.vue"
export default {
    components: {
        Table
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
  