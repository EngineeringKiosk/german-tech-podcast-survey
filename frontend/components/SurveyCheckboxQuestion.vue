<template>
    <section class="bg-white shadow-sm rounded-lg p-6">
        <fieldset>
            <legend class="text-xl font-semibold text-gray-900" :class="subtitle ? 'mb-2' : 'mb-4'">
                {{ legend }}
            </legend>
            <p v-if="subtitle" class="text-sm text-gray-500 mb-4">{{ subtitle }}</p>
            <div class="space-y-3">
                <div v-for="option in options" :key="option" class="flex items-start">
                    <input :id="`${name}-${slugify(option)}`" type="checkbox" :value="option"
                        :checked="modelValue.includes(option)"
                        class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300 rounded"
                        @change="toggle(option)" />
                    <label :for="`${name}-${slugify(option)}`" class="ml-3 text-gray-700">
                        {{ option }}
                    </label>
                </div>
                <div v-if="freitextLabel !== undefined" class="mt-4">
                    <label :for="`${name}-freitext`" class="block text-sm font-medium text-gray-700 mb-2">
                        {{ freitextLabel ?? 'Sonstiges:' }}
                    </label>
                    <input :id="`${name}-freitext`" type="text" :value="freitextModelValue"
                        :placeholder="freitextPlaceholder ?? 'Weitere Angaben...'"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        @input="$emit('update:freitextModelValue', ($event.target as HTMLInputElement).value)" />
                </div>
            </div>
        </fieldset>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    legend: string
    subtitle?: string
    options: string[]
    modelValue: string[]
    freitextLabel?: string
    freitextModelValue?: string
    freitextPlaceholder?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string[]): void
    (e: 'update:freitextModelValue', value: string): void
}>()

function toggle(option: string) {
    const current = [...props.modelValue]
    const idx = current.indexOf(option)
    if (idx === -1) {
        current.push(option)
    } else {
        current.splice(idx, 1)
    }
    emit('update:modelValue', current)
}

function slugify(value: string): string {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 40)
}
</script>
