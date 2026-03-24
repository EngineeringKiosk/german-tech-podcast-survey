<template>
    <section class="bg-white shadow-sm rounded-lg p-6">
        <fieldset>
            <legend class="text-xl font-semibold text-gray-900 mb-4" :class="{ 'mb-2': subtitle }">
                {{ legend }}
            </legend>
            <p v-if="subtitle" class="text-sm text-gray-500 mb-4">{{ subtitle }}</p>
            <div class="space-y-3">
                <div v-for="option in options" :key="option" class="flex items-start">
                    <input :id="`${name}-${slugify(option)}`" :name="name" type="radio" :value="option"
                        :checked="modelValue === option"
                        class="h-4 w-4 mt-1 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
                        @change="$emit('update:modelValue', option)" />
                    <label :for="`${name}-${slugify(option)}`" class="ml-3 text-gray-700">
                        {{ option }}
                    </label>
                </div>
            </div>
        </fieldset>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    name: string
    legend: string
    subtitle?: string
    options: string[]
    modelValue: string
}>()

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

function slugify(value: string): string {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 40)
}
</script>
