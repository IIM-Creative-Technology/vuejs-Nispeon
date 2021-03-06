<template>
    <section class="edit-b flex">

        <div class="flex">
            <div>
                <label for="addPT">Page Title</label>
                <input v-model="pageTitle" type="text" class="addInput" id="addPT" placeholder="Enter Page title..."
                    maxlength="50" disabled>
            </div>

            <div>
                <label for="addMT">Meta Title</label>
                <input v-model="metaTitle" type="text" class="addInput" id="addMT" placeholder="Enter Meta title..."
                    maxlength="50">
            </div>


            <div>
                <label for="addMD">Meta Description</label>
                <textarea v-model="metaDesc" class="addInput" id="addMD"
                    placeholder="Enter Meta description..." maxlength="300"></textarea>
            </div>

        </div>

        <div class="flex">
            <img :src="image" class="addImg">

            <div>
                <label for="addImg">Add an Image</label>
                <input v-model="image" type="text" placeholder="Enter URL..." id="addImg">
            </div>


        </div>

        <div class="texDiv">
            <label for="addContent">Page Content</label>
            <editor api-key="7286qcc0rvjna10mjhx3cdnk3dtltqf223x68s3f3cngsskb" :init="{
                menubar: false
            }" v-model="content" />
        </div>


        <button v-on:click="createArticle">Create</button>
    </section>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'


    export default {
        name: "BlogEdit",
        data() {
            return {
                pageTitle: this.post.title,
                metaTitle: this.post.metat,
                metaDesc: this.post.metad,
                image: this.post.img,
                content: this.post.content
            }
        },
        props: {
            post: {
                type: Array
            }
        },
        components: {
            'editor': Editor
        }
    }
</script>

<style scoped>
    .addImg {
        width: 50%;
        min-width: 50px;
        border: solid 1px black;
        min-height: 50px;
    }

    .addTexta {
        resize: none;
        width: 50%;
        min-height: 20vH;
    }

    section.flex {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-color: rgb(240, 235, 175);
    }

    section.flex>* {
        margin: 3vH 0;
    }

    div.flex {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        min-height: 30vh;
        width: 45%;
    }

    .texDiv {
        width: 100%;
        padding: 0 10%;
    }

    #addMD {
        resize: none;
        width: 80%;
        height: 10vH;
    }

    label {
        margin-right: 10px;
    }

    button {
        border: 1px solid green;
        background: greenyellow;
        padding: 2vh;
        border-radius: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(154, 252, 8);
    }

    button:focus {
        background: rgb(8, 145, 8);
        outline: none;
        border-top: 3px solid green;
        border-left: 3px solid green;
    }

    @media screen and (max-width: 769px) {
        section.flex {
            flex-direction: column;
            justify-content: space-evenly;
        }

        .editiv > section {
            border-radius: 40px ;
        }

        .texDiv {
            padding: 0;
        }

    }
</style>