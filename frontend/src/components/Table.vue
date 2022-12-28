<template>
    <div>
        <table class="table table-hover" style="width: 100%;">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Location</th>
                    <th class="text-center">Time</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-for="(item, index) in rows" :key="item + index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.location }}</td>
                    <td>{{ formatDate(item.date) }} UTC</td>
                    <td>
                        <a class="action-link" @click.prevent="$router.push(`/events/update/${item.id}`)">Edit</a>
                        <a class="action-link" @click.prevent="deleteEvent(item.id)" style="padding: 0 5px;">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-if="rows && !rows.length" class="center">No data found</p>

        <div class="table-footer">
            <p>{{ currentPage }} of total {{ ceil(total, pageSize) }}</p>
            <Page v-model="currentPage" :total="currentTotal" :page-size="pageSize" @on-change="changePage" />
        </div>

        <inline-loader v-if="loading" />
    </div>
</template>

<script>
import InlineLoader from "@/components/loader/Inline-Lodaer.vue"
import moment from "moment"
export default {
    name: 'DataTable',
    props: ['rows', 'loading', 'page', 'pageSize', 'totalRecord', 'total'],
    components: { InlineLoader },

    data() {
        return {
            currentPage: this.page,
        }
    },

    computed: {
        currentTotal() {
            return this.total
        }
    },

    methods: {
        formatDate(date){
            return moment(date).format('MMM D YYYY - HH:mm:ss')
        },
        ceil(total, pageSize) {
            return Math.ceil(total / pageSize)
        },

        changePage(page) {
            this.$emit('changePage', page)
        },
        async deleteEvent(id) {
            this.$emit('updateLoading', true)
            const res = await this.callApi('delete', `/events/${id}`)
            if (res.status === 200)
                this.$emit('deleteEventId', id)
            this.$emit('updateLoading', false)
        }
    }
}
</script>
<style scoped>
.table-footer {
    display: flex;
    justify-content: space-between;
}
</style>