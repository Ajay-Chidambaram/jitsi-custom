ARG JITSI_REPO=jitsi
ARG BASE_TAG=stable
FROM ${JITSI_REPO}/web:${BASE_TAG}

# ADD https://raw.githubusercontent.com/acmesh-official/acme.sh/2.8.8/acme.sh /opt
# COPY rootfs/ /

RUN mkdir /usr/share/jitsi-meet/background-color-plugin
COPY ./background-color-plugin.js /usr/share/jitsi-meet/background-color-plugin

COPY ./config.js /usr/share/jitsi-meet/

EXPOSE 80 443

VOLUME ["/config", "/usr/share/jitsi-meet/transcripts"]