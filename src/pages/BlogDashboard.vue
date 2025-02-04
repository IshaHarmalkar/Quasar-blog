<template>
  <q-page class="q-pa-md">
    <q-toolbar>
      <q-toolbar-title>Blog Dashboard</q-toolbar-title>
      <q-btn color="primary" label="Add Post" @click="showAddDialog = true" />
    </q-toolbar>

    <q-table
      flat bordered
      title="Blog Posts"
      :rows="posts"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell(actions)="props">
        <q-td>
          <q-btn size="sm" color="secondary" label="Edit" @click="editPost(props.row)" />
          <q-btn size="sm" color="negative" label="Delete" @click="deletePost(props.row.id)" />
        </q-td>
      </template>
    </q-table>

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="showAddDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ isEditing ? "Edit Post" : "Add Post" }}</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="form.title" label="Title" />
          <q-input v-model="form.content" label="Content" type="textarea" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn color="primary" :label="isEditing ? 'Update' : 'Add'" @click="savePost" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>


export default {
     mounted() {
    console.log("BlogDashboard loaded!");
  }
  
};
</script>
