<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header bg-white">
                    <h5><strong>Events</strong></h5>
                    <span class="text-muted">List of events! - </span>
                    <a style="color: #4F47E5; font-weight: 600; cursor: pointer;"
                        @click.prevent="showModal = !showModal">
                        Create
                    </a>
                </div>
                <div class="card-body">
                    <div style="margin-bottom: 15px;">
                        <p>Show
                            <span>
                                <Select v-model="pageSize" @on-select="paginate" style="width:50px">
                                    <Option v-for="(item, index) in pageSizeOptions" :key="item + index" :value="item">
                                        {{ item }}</Option>
                                </Select>
                            </span>
                            entries
                        </p>
                    </div>
                    <data-table :rows="events" :loading="tableLoading" :page="page" :pageSize="pageSize" :total="total"
                        @updateLoading="updateLoading" @deleteEventId="filterEvents" @paginate="paginate">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import DataTable from "../components/Table.vue"
export default {
    components: {
        DataTable
    },

    data() {
        return {
            events: [],
            tableLoading: true,
            page: 1,
            pageSize: 5,
            total: 0,
            showModal: false,
            pageSizeOptions: [5, 10]
        }
    },

    methods: {
        updateLoading(loading) {
            this.tableLoading = loading
        },

        filterEvents(eventId) {
            this.events = this.events.filter(event => event.id !== eventId)
        },

        async paginate() {
            this.page = parseInt(this.page || 1)
            this.pageSize = parseInt(this.pageSize || 5)

            this.tableLoading = true
            const res = await this.callApi('get', '/events', {}, {
                page: this.page,
                pageSize: this.pageSize
            })

            if (res.status === 200) {
                this.events = res.data.data
                this.page = res.data.page
                this.pageSize = res.data.pageSize
                this.total = res.data.total
            }

            this.tableLoading = false
        }
    },

    watch: {
        // pageSize: function () {
        //     this.paginate()
        // }
    },

    async mounted() {
        this.paginate()
    }
}

</script>
  