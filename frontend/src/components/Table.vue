<template>
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
                <td>{{ item.date }}</td>
                <td>
                    <a href="javascript(void)">Edit</a>
                    <a href="javascript(void)"  style="padding: 0 5px;">Delete</a>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Location</th>
                <th class="text-center">Time</th>
                <th class="text-center">Action</th>
            </tr>
        </tfoot>
    </table>
</template>

<script>
module.exports = {
    props: ['rows', 'loading', 'page', 'pageSize']
}
</script>