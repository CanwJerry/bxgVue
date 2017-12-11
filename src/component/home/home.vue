<template>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </el-main>
            </el-container>
      </el-container>
</template>

<script>
</script>

<style scoped>
   
</style>