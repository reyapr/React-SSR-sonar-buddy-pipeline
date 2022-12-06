FROM sonarsource/sonar-scanner-cli:4.7

ARG SONAR_TOKEN
RUN export SONAR_TOKEN=$SONAR_TOKEN
WORKDIR /app
COPY . /app

LABEL version="1.1.0" \
      repository="https://github.com/sonarsource/sonarqube-scan-action" \
      homepage="https://github.com/sonarsource/sonarqube-scan-action" \
      maintainer="SonarSource" \
      com.github.actions.name="SonarQube Scan" \
      com.github.actions.description="Scan your code with SonarQube to detect Bugs, Vulnerabilities and Code Smells in up to 27 programming languages!" \
      com.github.actions.icon="check" \
      com.github.actions.color="green"
      
RUN sonar-scanner \
-Dsonar.login=$SONAR_TOKEN

RUN chmod +x sonar-script/check-quality-gate.sh

test
      
ENTRYPOINT ["/sonar-script/check-quality-gate.sh"]
