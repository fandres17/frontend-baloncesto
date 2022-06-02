<template>
    <div class="content content-result">
        <div class="container">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header text-center">
                        <h2>Resultados de Partidos</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <h2 class="subtitle">
                                <br>
                                <!-- <button class="btn btn-secondary bt-1" type="submit" v-on:click="tableFromJson">Create Table from JSON data</button> -->
                                <p id='showData'></p>
                            </h2>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="text">
                                    <th>Nombre</th>
                                    <th>Ciudad</th>
                                    <th>Escudo</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in resultado" :key="index">
                                        <td>{{item.BookName}}</td>
                                        <td>{{item.Category}}</td>
                                        <td>{{item.Price}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            resultado:[
                {
                    'BookID': '1', 'BookName': 'Challenging Times',
                    'Category': 'Business', 'Price': '125.60'
                },
                {
                    'BookID': '2', 'BookName': 'Learning JavaScript',
                    'Category': 'Programming', 'Price': '56.00'
                },
                {
                    'BookID': '3', 'BookName': 'Popular Science',
                    'Category': 'Science', 'Price': '210.40'
                }]
        }
    },
    methods: {
        tableFromJson: function () {
            // the json data. (you can change the values for output.)
            var myBooks = [
                {
                    'Book ID': '1', 'Book Name': 'Challenging Times',
                    'Category': 'Business', 'Price': '125.60'
                },
                {
                    'Book ID': '2', 'Book Name': 'Learning JavaScript',
                    'Category': 'Programming', 'Price': '56.00'
                },
                {
                    'Book ID': '3', 'Book Name': 'Popular Science',
                    'Category': 'Science', 'Price': '210.40'
                }
            ]

            // Extract value from table header. 
            // ('Book ID', 'Book Name', 'Category' and 'Price')
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // Create a table.
            var table = document.createElement("table");

            // Create table header row using the extracted headers above.
            var tr = table.insertRow(-1);                   // table row.

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // table header.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            // add json data to the table as rows.
            for (var i = 0; i < myBooks.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[i][col[j]];
                }
            }

            // Now, add the newly created table with json data, to a container.
            var divShowData = document.getElementById('showData');
            divShowData.innerHTML = "";
            divShowData.appendChild(table);
        }
    }
}
</script>
<style>
.information {
    margin: 0;
    padding: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.information h1 {
    font-size: 60px;
    color: #0f1316;
}

.content-result {
    margin: 40px 10px ;
}

.bt-1 {
    width: 250px;
}
.subtitle {
    display: flex;
    justify-content: flex-end;
}
</style>