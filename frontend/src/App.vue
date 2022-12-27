<template>
  <div class="album py-5 bg-light">
      <main>
          <div class="album py-5 bg-light">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="card">
                              <div class="card-header bg-white">
                                  <h5><strong>Events</strong></h5>
                                  <span class="text-muted">List of events - </span>
                                  <a @click.prevent="showModal = !showModal"
                                      style="color: #859AE3; font-weight: 600;">Create</a>
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

      <div :class="['modal fade', showModal ? 'show' : '']" :style="`display: ${showModal ? 'block' : 'none'};`">
          <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="card-header">
                      <h5 class="text-black"><strong>Events</strong></h5>
                      <span class="text-muted">Create an event!</span>
                  </div>
                  <div class="modal-body mx-3">
                      <form class="text-black" id="create-event-form">
                          <div class="form-group">
                              <label for="name">Name</label>
                              <input type="text" class="form-control" id="name" required>
                          </div>
                          <div class="form-row">
                              <div class="form-group col-md-6">
                                  <label for="location">Location</label>
                                  <select class="form-select form-control" aria-label=".form-select-lg"
                                      name="location" id="location" required>
                                  </select>
                              </div>
                              <div class="form-group col-md-6">
                                  <label for="date">Date</label>
                                  <input type="datetime-local" class="form-control" name="datetime" id="date"
                                      required>
                              </div>
                          </div>
                          <button type="submit" class="btn btn-primary float-right">Create</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
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
