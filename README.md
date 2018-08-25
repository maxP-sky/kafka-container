# kafka-container

## 1) Connect Application to Docker Kafka container

- **set kafka host as: `kafka1:9092` and set topic the same as the consumer topic in Step 3 (within your application)**

- **Open `/etc/hosts` file and add line:**
    - **`127.0.0.1 kafka1 zookeeper`**

---
## 2) Run Kafka and Zookeeper

- **`docker-compose up`**

## 3) Start Kafka Consumer (Data Stream)

- **Open a new terminal**
- **`TOPIC=[...] npm start`**
---
