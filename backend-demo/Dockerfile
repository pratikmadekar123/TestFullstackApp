FROM openjdk:17
EXPOSE 8081
#WORKDIR /app

# Copy JAR file
ADD target/*.jar backend-app.jar

# Optional: Copy profile-based config
# COPY src/main/resources/application-prod.yml /app/config/


ENTRYPOINT ["java", "-jar", "/backend-app.jar"]
