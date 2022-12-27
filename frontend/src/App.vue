<template>
  <div id="app">
    <main>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header bg-white">
                  <h5><strong>Events</strong></h5>
                  <span class="text-muted">List of events!</span>
                  <a class="btn btn-sm btn-info" id="reset-filer" style="float: right;margin-top: -5px;" href="#"
                    data-toggle="modal" data-target="#eventCreateModal">
                    <i class="fas fa-plus-square"></i> Create
                  </a>
                </div>
                <!-- /.panel-heading -->
                <div class="card-body">
                  <Table :rows="events" :loading="tableLoading" :page="page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Table from "./components/Table.vue"
export default {
  components: {
    Table
  },

  data() {
    return {
      events: [],
      tableLoading: true,
      page: 1,
      pageSize: 5
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
