FROM jenkins/jenkins:lts

# Instala Node.js y npm
USER root
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Vuelve al usuario Jenkins
USER jenkins
